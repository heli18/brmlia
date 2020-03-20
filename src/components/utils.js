import React, { Component } from "react";

import { useUniformStore, uniApi } from "../imagecanvas/custom/ImageStore.js"

export const uApi = uniApi;

export const withUniformStore = (Component: any) => {
  return (props: any) => {
    return <Component api={uApi} {...props}/>;
  };
};




