var classNames = require('classnames');
var React = require('react');
var FormattedMessage = require('react-intl').FormattedMessage;

require('../forms/button.scss');
require('./ttt-tile.scss');

var TTTTile = React.createClass({
    type: 'TTTTile',
    propTypes: {
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        imageUrl: React.PropTypes.string.isRequired,
        tutorialLoc: React.PropTypes.string.isRequired
    },
    handleClick: function () {
        alert('show Modal');
    },
    render: function () {
        var classes = classNames(
            'ttt-tile',
            this.props.className
        );
        return (
            <div className={classes} >
                <a href={this.props.tutorialLoc}>
                    <div className="ttt-tile-tutorial">
                        <div className="ttt-tile-image">
                            <img className="ttt-tile-image-img" src={this.props.imageUrl} alt="" />
                            <div className="ttt-tile-image-try">
                                <div className="button mod-ttt-tile-image-try-button">
                                    Try it
                                </div>
                            </div>
                        </div>
                        <div className="ttt-tile-info">

                            <div className="button mod-ttt-tile-button">
                                <FormattedMessage id='tile.tutorial' defaultMessage='Tutorial'/>
                            </div>
                            <h4 className="ttt-tile-title">{this.props.title}</h4>
                            <p className="ttt-tile-description">
                                {this.props.description}
                            </p>
                        </div>
                    </div>

                </a>
                <div className="ttt-tile-guides" onClick={this.handleClick}>
                    <FormattedMessage id='tile.guides' defaultMessage='See Cards and Guides'/>
                    &nbsp;<img src="/svgs/ttt/see-more.svg" />
                </div>
            </div>
        );
    }
});

module.exports = TTTTile;
