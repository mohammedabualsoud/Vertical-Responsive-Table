interface IResponsiveTableClasses {
    table?: string; // table element
    headRow?: string; // head row
    head?: string; // head element of the table
    body?: string; //body of the table
    bodyRow?: string; // body row
    bodyCell?: string; // body cell
    caption?: string; // caption of the table
}

class ResponsiveTableController {
    // Table Caption.
    public caption: string;
    public classes: IResponsiveTableClasses = {};
    // flag to render the headers or not.
    public withHeaders: boolean = false;
    // Titles/headers of the table.
    public headers: Array <string>;
    // rows corresponding to the headers order.
    public rows: Array <string>;
    private transposed: boolean = false; // transpose the table into label value, you must add just a single item in the rows(i.e array of single array).
    constructor() {
    }

    $onInit() {
        if (this.transposed && this.rows && this.rows.length > 1) {
            throw new TypeError('The rows prop must contains single item only, if you want to transpose the table correctly.');
        }
    }
}

export const VerticalResponsiveTable = {
    template: require('./VerticalResponsiveTable.html'),
    controller: ResponsiveTableController,
    bindings: {
      caption: '<', // Table Caption.
      classes: '<', // Documention is below
      withHeaders: '<', // flag to render the headers or not.
      headers: '<', // Titles/headers of the table.
      rows: '<', // rows corresponding to the headers order.
      transposed: '<' // transponse the table,
    },
};
