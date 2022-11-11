import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-12 border-2 rounded-xl'>
            <div className="collapse collapse-arrow rounded-t-xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-gray-300 font-semibold text-xl ">
                    Q. &nbsp; Write down the difference between SQL and NoSQL.
                </div>
                <div className="collapse-content bg-gray-200 ">
                    <p className='pt-3'>
                        SQL stands for 'Structured Query Language'. It is the most common programming language used for executing queries, and handling data by using CRUD (create, read, update and delete) operation. NoSQL stands for 'Not-Only SQL'. These types of databases are Non-Relational or non-tabular. A No-SQL database does not require a specific schema and hence is schema-less, and all the entries/documents are JSON documents. Both SQL and NoSQL Databases have their set of advantages and disadvantages. SQL databases can be considered when you are looking for data consistency, reliability, integrity, and when the data is structured. NoSQL databases are a much better option if the data is large, semi-structured, or unstructured and you are looking for faster storage and retrieval of data.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-gray-300 font-semibold text-xl ">
                    Q. &nbsp; What is JWT, and how does it work?
                </div>
                <div className="collapse-content bg-gray-200">
                    <p className='pt-3'>
                        Basically JWT is a token based authorized system. If we doesn't use it anyone can find our data. Basically it's a token based authorized system where a user can access his/her data from backend using a token. There are 2 types of token presents in JWT. Access & Refresh token. Access token is short time token whire refresh token is long time token. When access token expires the refresh token autometically create a access token from the backend. When the refresh token expires the user logout and require user to login again to this website.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-gray-300 font-semibold text-xl ">
                    Q. &nbsp; What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content bg-gray-200">
                    <p className='pt-3'>
                        JavaScript is a popular language which runs inside website browsers as part of documents loaded by that browser. It gives behaviour to the web pages (CSS gives form or look & feel and HTML gives semantic structure). We can say that JS helps in providing advanced web development solutions. However, nothing should restrict JS to run solely inside any web browser. Now being an interpreted programming language, it needs a good interpreter to run V8 is the Google Chrome JS engine. 'Node' can be a front-end for it that can be used to run different scripts of JavaScript outside the web browser. The Node or Node.js usually represents a collection of methods and objects available to the JavaScript code when run in V8 or through the node interpreter. This is a JS library cum runtime. Furthermore, if you know about Java then Java is to JRE is to JVM in the same way JavaScript is to Node is to V8.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-arrow rounded-b-xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-gray-300 font-semibold text-xl ">
                    Q. &nbsp; How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content bg-gray-200">
                    <p className='pt-3'>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;