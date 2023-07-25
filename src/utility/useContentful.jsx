import { createClient } from "contentful";

const useContentful = () => {

  const client = createClient({
    space: "c8y5p62jnf0l",
    accessToken: "eOHUki_O4MEwhQpaduEYFr5FuuiXIP5lq_FO9DDj8ZU",
    host: "https://cdn.contentful.com",
    environment:'master'
  });

  const getData = async ({contentType, select}) => {
    try {
      const entries =  await client.getEntries({
        content_type: contentType,
        select: select,
      });
			return entries.items;
    } catch (e) {
      throw e;
    }
  };

  const getSingleItem = async ({content_type, slug}) => {
    try{
      const item = await client.getEntries({
        content_type: content_type,
        "fields.slug":slug,
      });
      console.log(item)
      return item
    } catch (e) {
      throw e
    }
  };

	return {getData, getSingleItem}
};

export default useContentful;
