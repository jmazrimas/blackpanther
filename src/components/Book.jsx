import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div className="book-online">
        <button onClick={() => window.open('https://book.insightdns.com/$/Start/?ID=2FC6E1230053D9301F5AF1D3610CB560') }>
          book online
        </button>
      </div>
    );
  }
}

export default Book;
