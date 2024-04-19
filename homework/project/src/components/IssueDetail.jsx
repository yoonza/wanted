// IssueDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;
const IssueDetail = () => {
  const { id } = useParams();
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    const fetchIssueDetail = async () => {
      try {
        // Fetch issue detail from Github API
        const response = await fetch(`https://api.github.com/repos/:owner/:repo/issues/${id}`, {
          headers: {
            Authorization: `token YOUR_ACCESS_TOKEN`, // Replace YOUR_ACCESS_TOKEN with your personal access token
          },
        });
        const data = await response.json();
        setIssue(data);
      } catch (error) {
        console.error('Error fetching issue detail:', error);
      }
    };

    fetchIssueDetail();
  }, [id]);

  return (
    <div>
      <h1>Issue Detail</h1>
      {issue && (
        <div>
          <p>{issue.number}, {issue.title}, {issue.user.login}, {issue.created_at}, {issue.comments}</p>
          <p>{issue.body}</p>
          {/* Advertisement Banner */}
          <a href="https://thingsflow.com/ko/home" target="_blank" rel="noopener noreferrer">
            <img src="https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7" alt="Advertisement Banner" />
          </a>
        </div>
      )}
    </div>
  );
};

export default IssueDetail;
