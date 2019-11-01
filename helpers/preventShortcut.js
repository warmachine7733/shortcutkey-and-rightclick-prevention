import { shortcut } from "./shortcut";
const shortcutList = [
  "Ctrl+Shift+I",
  "Ctrl+Shift+K",
  "Ctrl+Shift+C",
  "Ctrl+Shift+E",
  "Ctrl+Shift",
  "Shift+F7",
  "Shift+F12",
  "Shift+F5",
  "Shift+F9"
];
const preventShortcut = () => {
  shortcutList.map(each =>
    shortcut.add(each, () => console.log("do something else"))
  );
};
export default preventShortcut;
