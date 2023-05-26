import React from 'react';
import PageHero from '../PageHero/PageHero';

const Blog = () => {
    return (
        <>
            <PageHero title="Blog"></PageHero>
            <section className="blog">
                <div className="blog-container">
                    <h2 className="blog-title section-title text-center">
                        Interview Question
                    </h2>
                    <div className="faq-container">
                        <div className="faq-card">
                            <h3 className="question text-2xl font-bold mb-5">
                                Q: When should you use context API?
                            </h3>
                            <ul className="answer">
                                <li className='list-item list-disc list-inside'>We use Context when we have a large or complex application with many components that need to access the same data.</li>
                                <li className='list-item list-disc list-inside'>When we need to pass data between components that are not directly related.</li>
                                <li className='list-item list-disc list-inside'>When we need to update data in one component and have that change reflected in other components.</li>
                                <li className='list-item list-disc list-inside'>When we want to avoid "prop drilling" or passing props through multiple levels of components to get to the component that needs the data.</li>
                            </ul>
                        </div>
                        <div className="faq-card">
                            <h3 className="question text-2xl font-bold mb-5">
                                Q: What is a custom hook?
                            </h3>
                            <p className="answer">
                                <b>Ans: </b>
                                React Custom hooks are reusable functions that a React JS we can use to add special and unique functionality to the React applications.
                            </p>
                        </div>
                        <div className="faq-card">
                            <h3 className="question text-2xl font-bold mb-5">
                                Q: What is useRef?
                            </h3>
                            <p className="answer">
                                <b>Ans: </b>
                                useRef() is a built-in React hook that accepts one argument as the initial value and returns a reference. This Hook allows to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                            </p>
                        </div>
                        <div className="faq-card">
                            <h3 className="question text-2xl font-bold mb-5">
                                Q: What is useMemo?
                            </h3>
                            <p className="answer">
                                <b>Ans: </b>
                                useMemo is a React Hook that lets us cache the result of a calculation between re-renders. It only runs when one of its dependencies update. This can improve performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;