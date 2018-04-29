import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div className="book-online">
        <button onClick={() => window.open('http://book.insighthosted.com/$/Start/?ID=2FC6E1230053D9301F5AF1D3610CB560', '_blank', 'toolbar=no, menubar=no, width=1024, resize=no, scrollbar=no') }>
          BOOK ONLINE
        </button>
      </div>
    );
  }
}

export default Book;
