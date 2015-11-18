//Temporary comments data
var data = [
  { Author: "Nicky Keyse", Text: "Hello ReactJS.NET World!" },
  { Author: "Mike Hunt", Text: "This is one comment" },
  { Author: "Hugh Jass", Text: "This is *another* comment" }
];
//Comment Box
var CommentBox = React.createClass({
    render: function () {
        return (
          <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.props.data} />
            <CommentForm />
          </div>
      );
    }
});
//Comments List
var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.Author}>{comment.Text}
        </Comment>
      );
    });
    return (
      <div className="commentList">{commentNodes}
      </div>
    );
  }
});
//Comment Form
var CommentForm = React.createClass({
    render: function () {
        return (
          <div className="commentForm">
              Hello, world! I am a CommentForm.
          </div>
      );
    }
});
//Comment
var Comment = React.createClass({
    render: function () {
        var converter = new Showdown.converter();
        var rawMarkup = converter.makeHtml(this.props.children.toString());
        return (
          <div className="comment">
            <h2 className="commentAuthor">
              {this.props.author}
            </h2>
              <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
        </div>
      );
    }
});
React.render(
  <CommentBox url="/comments" />,
  document.getElementById('content')
);