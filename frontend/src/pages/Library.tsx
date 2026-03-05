import React from "react";
import { TableBlock } from "../components/runtime/TableBlock";
import { AgentComponent } from "../components/AgentComponent";

const Library: React.FC = () => {
  return (
    <div id="page-library-1">
    <div id="ilpjb" style={{"display": "flex", "height": "100vh", "fontFamily": "Arial, sans-serif", "--chart-color-palette": "default"}}>
      <nav id="isc6f" style={{"width": "250px", "background": "linear-gradient(135deg, #4b3c82 0%, #5a3d91 100%)", "color": "white", "padding": "20px", "overflowY": "auto", "display": "flex", "flexDirection": "column", "--chart-color-palette": "default"}}>
        <h2 id="ic8kb" style={{"marginTop": "0", "fontSize": "24px", "marginBottom": "30px", "fontWeight": "bold", "--chart-color-palette": "default"}}>{"BESSER"}</h2>
        <div id="ip6z4" style={{"display": "flex", "flexDirection": "column", "flex": "1", "--chart-color-palette": "default"}}>
          <a id="ism93" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "transparent", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/book">{"Book"}</a>
          <a id="i6fj7" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "rgba(255,255,255,0.2)", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/library">{"Library"}</a>
          <a id="izh5g" style={{"color": "white", "textDecoration": "none", "padding": "10px 15px", "display": "block", "background": "transparent", "borderRadius": "4px", "marginBottom": "5px", "--chart-color-palette": "default"}} href="/author">{"Author"}</a>
        </div>
        <p id="iq6r6" style={{"marginTop": "auto", "paddingTop": "20px", "borderTop": "1px solid rgba(255,255,255,0.2)", "fontSize": "11px", "opacity": "0.8", "textAlign": "center", "--chart-color-palette": "default"}}>{"© 2026 BESSER. All rights reserved."}</p>
      </nav>
      <main id="isqxu" style={{"flex": "1", "padding": "40px", "overflowY": "auto", "background": "#f5f5f5", "--chart-color-palette": "default"}}>
        <h1 id="ijrb6" style={{"marginTop": "0", "color": "#333", "fontSize": "32px", "marginBottom": "10px", "--chart-color-palette": "default"}}>{"Library"}</h1>
        <p id="i9k5d" style={{"color": "#666", "marginBottom": "30px", "--chart-color-palette": "default"}}>{"Manage Library data"}</p>
        <TableBlock id="table-library-1" styles={{"width": "100%", "minHeight": "400px", "--chart-color-palette": "default"}} title="Library List" options={{"showHeader": true, "stripedRows": false, "showPagination": true, "rowsPerPage": 5, "actionButtons": true, "columns": [{"label": "Name", "column_type": "field", "field": "name", "type": "str", "required": true}, {"label": "Web Page", "column_type": "field", "field": "web_page", "type": "str", "required": true}, {"label": "Address", "column_type": "field", "field": "address", "type": "str", "required": true}, {"label": "Telephone", "column_type": "field", "field": "telephone", "type": "str", "required": true}, {"label": "Books", "column_type": "lookup", "path": "books", "entity": "Book", "field": "title", "type": "list", "required": false}], "formColumns": [{"column_type": "field", "field": "name", "label": "name", "type": "str", "required": true, "defaultValue": null}, {"column_type": "field", "field": "web_page", "label": "web_page", "type": "str", "required": true, "defaultValue": null}, {"column_type": "field", "field": "address", "label": "address", "type": "str", "required": true, "defaultValue": null}, {"column_type": "field", "field": "telephone", "label": "telephone", "type": "str", "required": true, "defaultValue": null}, {"column_type": "lookup", "path": "books", "field": "books", "lookup_field": "title", "entity": "Book", "type": "list", "required": false}]}} dataBinding={{"entity": "Library", "endpoint": "/library/"}} />
        <div id="i9rx5" className="gjs-row" style={{"width": "100%", "height": "auto", "padding": "0", "margin": "0", "position": "static", "textAlign": "left", "zIndex": 0, "--chart-color-palette": "default", "display": "flex", "paddingTop": "10px", "paddingRight": "10px", "paddingBottom": "10px", "paddingLeft": "10px", "flexWrap": "wrap"}}>
          <div id="container_cell" className="gjs-cell" style={{"height": "auto", "padding": "0", "margin": "0", "position": "static", "textAlign": "left", "zIndex": 0, "--chart-color-palette": "default", "flex": "1 1 calc(33.333% - 20px)", "minWidth": "250px"}}>
            <AgentComponent id="iltwc" styles={{"width": "100%", "minHeight": "400px", "--chart-color-palette": "default"}} agent-name="Agent Diagram" agent-title="BESSER Agent" />
          </div>
        </div>
      </main>
    </div>    </div>
  );
};

export default Library;
