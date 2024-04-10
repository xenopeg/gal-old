const colors = {
  purple: {
    sidebar: {
      header:"#21163e",
      border:"#21163e",
      button: {
        hover: "#231742",
        active: "#2e1d57",
      }
    }
  }
}

export const theme = {
  main:{
    background: "#191822",
    content:  "#111019",
    font: "#f8f5ff"
  },
  header: {
    background: "#0e0e13",
    border: "#1e1e26",
  },
  sidebar: {
    background: "#101016",
    border: colors.purple.sidebar.border,
    header: colors.purple.sidebar.header,
    button: {
      hover: colors.purple.sidebar.button.hover,
      active: colors.purple.sidebar.button.active
    }
  }
}
