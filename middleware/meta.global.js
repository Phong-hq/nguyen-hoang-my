import { useAuthStore } from "~/store/auth";
import { COLLECTION } from "~/pocketbase";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore()
  const data = await authStore.getPageMeta();
  
  useHead({
      title: data?.title,
      meta: [
          {
            name: "description",
            content: data?.description ,
          },
          {
              name: "image",
              content: `https://admin.nguyen-hoang-my.com/api/files/${COLLECTION.META}/${data?.id}/${data?.image}`,
            },
          {
              property: "og:title",
              content: data?.title
            },
            {
              property: "og:description",
              content: data?.description,
            },
            {
              property: "og:image",
              content: `https://admin.nguyen-hoang-my.com/api/files/${COLLECTION.META}/${data?.id}/${data?.image}`,
            },
      ]
  })
})