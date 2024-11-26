import useMainStore from "../stores/mainStore";

export default function consoleLog(val) {
  const { isShowSatangLog } = useMainStore.getState();
  if (isShowSatangLog) {
    console.log(val);
  }
}
