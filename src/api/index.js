import APICaller from '../util';

const POST = 'post';
const GET = 'get';

export const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    const data = {
      email,
      password,
    };
    APICaller({ method: POST, url: 'auth/login', data })
      .then(res => {
        const { data = {} } = res;
        localStorage.setItem('token', data?.token);
        localStorage.setItem('name', data?.name);
        resolve(data);
      })
      .catch(err => reject(err));
  });
};

export const signup = ({
  email,
  userRole = 0,
  password,
  confirmPassword,
  name,
  skills = '',
}) => {
  return new Promise((resolve, reject) => {
    const data = {
      email,
      userRole,
      password,
      confirmPassword,
      name,
      skills,
    };

    APICaller({ method: POST, url: 'auth/register', data })
      .then(res => {
        const { data = {} } = res;
        localStorage.setItem('token', data?.token);
        localStorage.setItem('name', data?.name);
        resolve(data);
      })
      .catch(err => reject(err));
  });
};

export const getResetPasswordToken = email => {
  return new Promise((resolve, reject) => {
    APICaller({ method: GET, url: `auth/resetpassword?email=${email}` })
      .then(res => {
        const { data: { token } = {} } = res;
        resolve(token);
      })
      .catch(err => reject(err));
  });
};

export const verifyPasswordToken = token => {
  return new Promise((resolve, reject) => {
    APICaller({ method: GET, url: `auth/resetpassword/${token}` })
      .then(res => {
        const { data = {} } = res;
        resolve(data);
      })
      .catch(err => reject(err));
  });
};

export const changePassword = ({ password, confirmPassword, token }) => {
  return new Promise((resolve, reject) => {
    const data = {
      password,
      confirmPassword,
      token,
    };

    APICaller({ method: POST, url: 'auth/resetpassword', data })
      .then(res => {
        const { data = {} } = res;
        resolve(data);
      })
      .catch(err => reject(err));
  });
};

export const getPostedJobs = () => {
  return new Promise((resolve, reject) => {
    APICaller({ method: GET, url: 'recruiters/jobs' })
      .then(res => {
        const { data = [] } = res?.data;
        resolve(data);
      })
      .catch(err => reject(err));
  });
};

export const getJobCandidate = id => {
  return new Promise((resolve, reject) => {
    APICaller({ method: GET, url: `recruiters/jobs/${id}/candidates` })
      .then(res => {
        const { data = [] } = res;
        resolve(data);
      })
      .catch(err => reject(err));
  });
};

export const createJob = ({ title, description, location }) => {
  return new Promise((resolve, reject) => {
    const data = {
      title,
      description,
      location,
    };

    APICaller({ method: POST, url: 'jobs', data })
      .then(res => {
        const { data = {} } = res;
        resolve(data);
      })
      .catch(err => reject(err));
  });
};