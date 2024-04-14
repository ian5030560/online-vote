import create, { add } from "../utils";

interface TablePayload {
    columns: string[];
    items: Node[][];
}
const Table = (payload: TablePayload) => {
    let table = create("table", { className: "table" });
    let thead = create("thead");
    let tbody = create("tbody");
    let tcol = create("tr");

    return add(table, [
        add(thead, add(tcol, payload.columns.map(col => {
            let th = create("th", { attributes: { scope: "col" } });
            th.innerText = col;
            return th;
        }))),
        add(tbody, payload.items.map(item => {
            let tr = create("tr");
            return add(tr, item.map((it, i) => {
                if (i === 0) {
                    let th = create("th", { attributes: { scope: "row" } });
                    th.appendChild(it);
                    return th;
                }
                else {
                    let td = create("td");
                    td.appendChild(it);
                    return td
                }
            }));
        })),
    ]);
}

export default Table;