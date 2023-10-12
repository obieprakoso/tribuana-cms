import axios from "axios";
import {
  ICookieUser,
  deleteCookie,
  getCookie,
  setCookie,
} from "./CookieFunction";
// const Http = axios.create();
const Http = axios.create({
  // baseURL: "http://localhost:3306/api/",
  baseURL: "http://tribuana-api.obieprakoso.my.id/api/",
  timeout: 50000,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});
// Request interceptor for API calls
Http.interceptors.request.use(
  async (config: any) => {
    const keys = getCookie("auth");
    config.headers = {
      Authorization: `Bearer ${keys?.accessToken}`,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
// Response interceptor for API calls
Http.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const keys = getCookie("auth");
      const dataPayload = {
        refresh_token: keys?.refreshToken,
      };

      const access_token = await Http.post("auth/refresh-token", dataPayload, {
        withCredentials: true,
      }).catch((err) => {
        return Promise.reject(err);
      });
      const responseLogin = {
        id: keys?.id,
        email: keys?.email,
        name: keys?.name,
        no_tlp: keys?.no_tlp,
        no_unit: keys?.no_unit,
        accessToken: access_token.data.access?.token,
        expiredToken: access_token.data.access?.expires,
        refreshToken: access_token.data.refresh?.token,
        expiredrefreshToken: access_token.data.refresh?.expires,
      };
      deleteCookie("auth");
      setCookie("auth", JSON.stringify(responseLogin));
      const keysNew = getCookie("auth");
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${keysNew?.accessToken}`;
      return Http(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default Http;
