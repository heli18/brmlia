import create from 'zustand';

export const initState = {
  channels:
    [
      {
        selected: false
      },
      {
        selected: false
      },
      {
        selected: false
      },
    ]
}

export const [useMainSettings, settingsApi] = create ( set => ({
  ...initState,
}))

export function updateChannelSel(channel) {
  settingsApi.setState( prevState => {
    const channels = prevState.channels.map((ch, j) => {
      if (j === channel-1) {
        var newChannel = ch;
        newChannel.selected = !prevState.channels[j].selected
        return newChannel;
      }
      else {
        return ch
      }
    })
    return {
      channels
    }
  })
}