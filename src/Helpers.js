//Used to get the innertext when a link is clicked so we know what tab is active
export function getActiveTab(e) {
  let activeTab = e.currentTarget.textContent;
  return activeTab
}

//If the path of a URL contains the pathString, hasPathString will be > -1
//If the path doesn't contain the pathString, hasPathString will = -1
export function getCurrentUrl(pathString) {
  let currentUrl = window.location.href;
  let currentUrlArray = currentUrl.split("/");
  let hasPathString = currentUrlArray.indexOf(pathString);
  return hasPathString
}
