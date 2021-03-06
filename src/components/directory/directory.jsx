import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selector";

import MenuItem from "../menu-item/menu-item";
import "./directory.css";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map((section) => (
      <MenuItem
        key={section.id}
        title={section.title}
        imageUrl={section.imageUrl}
        size={section.size}
        linkUrl={section.linkUrl}
      />
    ))}
  </div>
);

// const mapStateToProps = (state) => ({
//   sections: selectDirectorySections(state),
// });

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
