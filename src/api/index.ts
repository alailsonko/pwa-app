/* eslint-disable consistent-return */
import dataJSON from '../data/data.json';

const api = {
  post: async (url: string, data: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      const response = fakeRoutes(url, data);
      console.log(response);
      if (response.status === 200) {
        resolve(response);
      } else {
        reject(response);
      }
    });
  },
};

function fakeRoutes(url: string, data: any): any {
  switch (url) {
    case '/signup':
      dataJSON.user.displayName = data.username;
      dataJSON.user.password = data.password;
      return {
        status: 200,
        data: dataJSON.user,
      };

    default:
      break;
  }
}

export default api;
