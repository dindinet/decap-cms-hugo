import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  renderBlock = (block) => {

    switch (block.type) {
      case "hero_section":
        return (
          <div className="hero-section">
            <div>{block.title}</div>
            <div>{block.subtitle}</div>
          </div>
        );
      case "image":
        return (
          <div className="hero-block">
            <img src={block.src} alt={block.alt} />
          </div>
        );
      case "content_section":
        return (
          <div className="content-section">
            <div>{block.title}</div>
            <div>{block.content}</div>
          </div>
        );
      // Add more cases for other block types
      default:
        return (
          <div className="default-section">
            <div  class="titulo">{block.title}</div>
            <div class="tipo">{block.type}</div>
            <div  class="nombre">{block.name}</div>
            <div>Nothing To See Here</div>
          </div>
        );
    }
  };
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));

    return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
      <div className="flex justify-between grey-3">
        <p>{ format(entry.getIn(["data", "date"]), "iii, MMM d, yyyy") }</p>
        <p>Read in x minutes</p>
      </div>
      <div className="cms mw6">
        <p>{ entry.getIn(["data", "description"]) }</p>
        { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
        { widgetFor("body") }
      </div>
      <div>


      {(this.props.widgetsFor("sections")|| ["nulla"]).map((section, index) => (         
        <div key={index}>We are dealing with a type of: {section}</div>
      ))}



      </div>
    </div>;
  }
}

///<React.Fragment key={index}>{this.renderBlock(section.data)}</React.Fragment> 