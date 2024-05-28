import { wait } from "../../shared/helpers.js";

export const pierwszyCiag = () => wait(() => 'Pierwszy', 300);
export const drugiCiag = () => wait(() => 'Drugi', 100);
export const trzeciCiag = () => wait(() => 'Trzeci', 200);