// app/blog/[id]/page.tsx
"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';

const BlogPost = () => {
  const { id } = useParams();  // Use useParams to get dynamic route parameters

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform necessary actions like sending the data to a server
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  // Simulate a blog post fetching mechanism using the `id`
  const posts = {
    sanity: {
      title: 'Sanity CMS',
      content: `
        <p>In the ever-evolving world of web development, content management systems (CMS) have undergone tremendous transformation. One of the standout players in this space is <strong>Sanity</strong>, a headless CMS designed to provide developers with unparalleled flexibility, real-time collaboration, and powerful customization options. In this blog, we’ll dive deep into what makes Sanity a go-to choice for modern development projects.</p>
        <h2>What is Sanity?</h2>
        <p>Sanity is a headless CMS that allows you to manage and structure content with complete control. Unlike traditional CMS platforms that couple the backend with a predefined frontend, Sanity provides a fully decoupled approach, enabling developers to fetch content via APIs and use it across various platforms such as websites, mobile apps, or even IoT devices.</p>
        <h2>Key Features of Sanity</h2>
        <ol>
          <li><strong>Real-Time Collaboration:</strong> Sanity’s real-time editing capabilities make it stand out. Multiple team members can work simultaneously on the same content, similar to platforms like Google Docs. This feature is invaluable for dynamic teams working on fast-paced projects.</li>
          <li><strong>Customizable Content Studio:</strong> Sanity’s Content Studio is a React-based interface that you can fully customize to meet your project’s needs. Whether it’s adding custom input components or integrating third-party APIs, the Content Studio adapts to your workflow.</li>
          <li><strong>Rich API:</strong> With its GraphQL and REST APIs, Sanity makes it seamless to fetch and manage content. The APIs are fast, developer-friendly, and scalable.</li>
          <li><strong>Content as Data:</strong> Sanity treats content as structured data stored in JSON format. This approach makes it easy to query, manipulate, and reuse content across various channels.</li>
          <li><strong>Generous Free Tier and Scalability:</strong> Sanity offers a robust free tier, making it ideal for small to medium-sized projects. As your project grows, you can seamlessly scale with enterprise-grade features.</li>
        </ol>
      `,
    },
    api: {
      title: 'APIs: The Backbone of Modern Applications',
      content: `
        <p>In the digital age, APIs (Application Programming Interfaces) have become the unsung heroes of the tech world. They enable communication between different software systems, making it possible for apps and services to integrate seamlessly. Whether you're booking a flight, sending a message, or fetching weather data, APIs are at work behind the scenes. This blog explores what APIs are, how they work, and their significance in modern development.</p>
        <h2>What is an API?</h2>
        <p>At its core, an API is a set of rules and protocols that allows one software application to interact with another. It acts as a bridge, enabling the transfer of data and functionality between systems. APIs define the requests that can be made, how to make them, and the expected responses.</p>
        <h2>Real-World Analogy</h2>
        <p>Think of an API as a waiter in a restaurant. You (the client) tell the waiter what you want from the menu. The waiter conveys your request to the kitchen (the server) and delivers the prepared dish back to you. Similarly, APIs handle requests and responses between clients and servers.</p>
        <h2>Types of APIs</h2>
        <ol>
          <li><strong>Web APIs:</strong> Web APIs are used to enable communication between a web server and a client. Examples include:
            <ul>
              <li>REST APIs: Follow RESTful principles, using HTTP methods like GET, POST, PUT, and DELETE.</li>
              <li>GraphQL APIs: Allow clients to request only the data they need, reducing over-fetching and under-fetching.</li>
            </ul>
          </li>
          <li><strong>Operating System APIs:</strong> These APIs enable applications to interact with the operating system. For instance, Windows APIs allow apps to access system resources like files and devices.</li>
          <li><strong>Library APIs:</strong> Library APIs provide pre-defined functions that developers can use to simplify coding tasks. For example, Python’s requests library offers an API for making HTTP requests.</li>
          <li><strong>Hardware APIs:</strong> Hardware APIs enable software to interact with physical devices. For example, APIs for accessing a smartphone’s camera or sensors.</li>
        </ol>
        <h2>How APIs Work</h2>
        <p>APIs operate through requests and responses:</p>
        <ol>
          <li><strong>Request:</strong> A client sends a request to an API endpoint with necessary parameters.</li>
          <li><strong>Processing:</strong> The API processes the request, interacting with the server or database as needed.</li>
          <li><strong>Response:</strong> The API sends a response, usually in JSON or XML format, back to the client.</li>
        </ol>
        <h2>Example: Weather API</h2>
        <p>Imagine you’re building an app that displays weather information. You could use a weather API to fetch data. Here’s a typical flow:</p>
        <pre><code>Request: GET https://api.weather.com/v1/current?city=London</code></pre>
        <pre><code>Response:
        {
          "city": "London",
          "temperature": "15°C",
          "condition": "Cloudy"
        }</code></pre>
        <h2>Benefits of Using APIs</h2>
        <ul>
          <li><strong>Integration:</strong> APIs enable different systems to work together, enhancing functionality.</li>
          <li><strong>Efficiency:</strong> Developers can leverage existing APIs to save time and resources.</li>
          <li><strong>Scalability:</strong> APIs support scaling by allowing modular and reusable components.</li>
          <li><strong>Innovation:</strong> APIs foster innovation by enabling developers to build on existing platforms.</li>
        </ul>
        <h2>Popular API Use Cases</h2>
        <ul>
          <li><strong>Social Media Integration:</strong> Embedding tweets or posts into websites using Twitter or Facebook APIs.</li>
          <li><strong>Payment Processing:</strong> Facilitating online payments with APIs from PayPal or Stripe.</li>
          <li><strong>Mapping Services:</strong> Integrating maps and location data with Google Maps API.</li>
          <li><strong>Data Analytics:</strong> Fetching insights using APIs from platforms like Google Analytics.</li>
        </ul>
      `,
    },
    nextjs: {
      title: 'Next.js: The React Framework for Production',
      content: `
        <p>Next.js is a React framework developed by Vercel. It simplifies the development of React applications by providing out-of-the-box solutions for common challenges like server-side rendering, routing, and static site generation. With Next.js, developers can create dynamic, SEO-friendly, and highly optimized web applications with ease.</p>

        <h2>Key Features of Next.js</h2>
        <ol>
          <li><strong>File-Based Routing:</strong> Next.js uses a file-based routing system. Each file in the pages directory automatically becomes a route, eliminating the need to configure routes manually.</li>
          <li><strong>Server-Side Rendering (SSR):</strong> Next.js supports server-side rendering out of the box, enabling dynamic content to be rendered on the server before being sent to the client. This improves SEO and ensures faster initial page loads.</li>
          <li><strong>Static Site Generation (SSG):</strong> For content that doesn’t change frequently, Next.js allows static site generation. Pages are pre-rendered at build time, resulting in lightning-fast performance.</li>
          <li><strong>API Routes:</strong> Next.js allows you to create API endpoints directly in your application under the pages/api directory.</li>
          <li><strong>Image Optimization:</strong> With the next/image component, Next.js automatically optimizes images, ensuring they are delivered in the most efficient format and size for the user’s device.</li>
          <li><strong>Built-In CSS and Sass Support:</strong> Next.js supports global and module-based CSS as well as Sass, allowing developers to style their applications effortlessly.</li>
          <li><strong>Incremental Static Regeneration (ISR):</strong> Next.js allows you to update static pages after build time, without rebuilding the entire site.</li>
        </ol>
        
      `,
    },
  };

  const post = posts[id as keyof typeof posts];

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-3xl text-center font-bold mb-8">{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post?.content }} />

      <h2 className="text-2xl mt-12 font-semibold">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-6 mt-4 bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="name" className="text-lg font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-lg font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="comments" className="text-lg font-medium">Comments</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {submitted && <p className="mt-4 text-blue-500 text-xl text-center">Thank you for your comment!</p>}
    </div>
  );
};

export default BlogPost;


