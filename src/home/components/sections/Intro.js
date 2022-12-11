import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="row">
        <div className="col">
          <span>This is my portfolio</span>
          <h2>MY NAME IS KARAN</h2>
          <p>
            Lorem Ipsum is simply dummy Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <button className="btn btn-primary">
            lets connect <i class="fa-solid fa-circle-arrow-right"></i>
          </button>
        </div>
        <div className="col">
          <img
            src="https://images.unsplash.com/photo-1670439999166-888c4386d15a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80&h=350"
            alt="hello"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Intro;
