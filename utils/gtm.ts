// gtm.js
import TagManager from "react-gtm-module";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export const initTagManager = () => {
  TagManager.initialize({ gtmId });
};