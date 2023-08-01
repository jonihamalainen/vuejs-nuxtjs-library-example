export default defineNuxtRouteMiddleware((to, from) => {
    const User = useUserState();
    if (to.path === '/lainaus' || to.path === "/tiedot" ||to.path === "/palautus") {
      if (User.userData.value === undefined || User.userData.value === null) {
        return navigateTo("/kirjaudu")
      }
    }
  })