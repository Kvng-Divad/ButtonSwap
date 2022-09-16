import { recoilPersist } from "recoil-persist";

const implementPersist = key => {
  const { persistAtom } = recoilPersist({
    key,
    storage: localStorage,
  });
  return [persistAtom];
};

export default implementPersist;
