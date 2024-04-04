const colors = {
  purple: {
    sidebar: {
      header:"#21163e",
      border:"#21163e",

    }
  }
}

export const theme = {
  main:{
    background: "#191822",
    font: "#f8f5ff"
  },
  header: {
    background: "#0e0e13",
    border: "#1e1e26",
  },
  sidebar: {
    background: "#101016",
    border: colors.purple.sidebar.border,
    header: colors.purple.sidebar.header
  }
}
