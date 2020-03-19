import React, { Component } from "react";

import { useFileStore, fileApi } from "../fileuploader/fileStore.js"

export const fStore = fileApi.getState();
export const fApi = fileApi;

export const withFileStore = (Component: any) => {
  return (props: any) => {
    return <Component store={fStore} api={fApi} {...props}/>;
  };
};
