import "./styles.css";
import { connect } from "react-redux";
import { fetchingItems, fetchItems } from "./action";
import ItemTable from "./itemTable";

function App(props) {
  return (
    <div className="App">
      <h1>Items</h1>
      <button onClick={props.fetchItem}>Click for Items</button>
      <ol>
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
        <li class="submit">
          Item4
          <ul className="sublist">
            <li>Subitem</li>
            <li>subItem2</li>
          </ul>
        </li>
        <li>item5</li>
        <li>item6</li>
      </ol>
      {props.isLoading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th class="col-sm-2">S.no</th>
                <th class="col-sm-2">Name</th>
                <th class="col-sm-2">MoreDetails</th>
              </tr>
            </thead>

            {props.Items.map((item, index) => {
              console.log("---", item);
              return <ItemTable key={index} item={item.data} />;
            })}
          </table>
        </div>
      )}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: () => dispatch(fetchingItems())
  };
};
const mapStateToProps = (state) => ({
  Items: state.items,
  isLoading: state.isLoading
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
