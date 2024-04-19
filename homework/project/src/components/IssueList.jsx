// IssueList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const IssueItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const IssueList = () => {
  // State to store fetched issues
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Fetch issues from Github REST API
    const fetchIssues = async () => {
      try {
        // Fetch issues using Github API
        const response = await fetch(
          'https://api.github.com/repos/:owner/:repo/issues?state=open&sort=comments',
          {
            headers: {
              Authorization: `ADD_YOUR_TOKEN`, // Replace YOUR_ACCESS_TOKEN with your personal access token
            },
          }
        );
        const data = await response.json();
        setIssues(data);
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    fetchIssues();
  }, []);

  return (
    <div>
      <h1>Issue List</h1>
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>
            <Link to={`/issue/${issue.id}`}>
              {issue.number}, {issue.title}, {issue.user.login}, {issue.created_at}, {issue.comments}
            </Link>
          </li>
        ))}
      </ul>
      {/* Advertisement Banner */}
      <a href="https://thingsflow.com/ko/home" target="_blank" rel="noopener noreferrer">
        <img src="https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7" alt="Advertisement Banner" />
      </a>
    </div>
  );
};

export default IssueList;
