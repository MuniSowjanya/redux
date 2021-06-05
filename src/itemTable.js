import React from "react";
import MoreDetail from "./moreDetail";
import { connect } from "react-redux";

function Usertable(props) {
  return (
    <>
      {props.item.map((item, index) => {
        return (
          <tbody>
            <tr key={index}>
              <th class="col-sm-3">{item.id}</th>
              <td class="col-sm-3">{item.name}</td>
              <td class="col-sm-3">
                <MoreDetail item={item} />
              </td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
}
const mapStateToProps = (state) => ({
  isLoading: state.isLoading
});
export default connect(mapStateToProps)(Usertable);
