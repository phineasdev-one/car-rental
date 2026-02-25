export const scrollViewTo = (
  sectionName: string,
  isBehaviorAuto?: boolean,
  offsetNumber?: number,
) => {
  const checkBehavior: ScrollBehavior = isBehaviorAuto ? "auto" : "smooth";
  const element = document.querySelector(sectionName) as HTMLElement;
  if (!element) {
    return;
  }
  const offset = element.offsetTop + (offsetNumber ?? 0);
  window.scrollTo({ top: offset, behavior: checkBehavior });
};

