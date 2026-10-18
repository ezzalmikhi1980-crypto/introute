export const $=<E extends HTMLElement=HTMLElement>(s:string):E=>document.querySelector(s) as E;
export const T=(e:string,a:string):string=>`<span data-e>${e}</span><span data-a>${a}</span>`;
