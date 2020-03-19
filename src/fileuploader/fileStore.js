import create from 'zustand';

export const initState = {
  file: {
    name: "",
    image: null
  },
}

export const [useFileStore, fileApi] = create ( set => ({
  ...initState,
  upload: (name, image, style) => set ( state => ({
    ...state,
    file: {
      ...state.file,
      name: name,
      image: image,
      style: style
    },
  })),
}))