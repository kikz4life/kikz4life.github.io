'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitBranch } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

const GitHubProjects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/kikz4life/repos?sort=updated');
        const data = await res.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <motion.a
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{repo.name}</h3>
            <p className="text-gray-300 mb-4">{repo.description}</p>
            <div className="flex items-center text-gray-400 text-sm">
              <Star className="w-4 h-4 mr-1" />
              <span className="mr-4">{repo.stargazers_count}</span>
              <GitBranch className="w-4 h-4 mr-1" />
              <span className="mr-4">{repo.forks_count}</span>
              {repo.language && (
                <>
                  <span className="mr-1">•</span>
                  <span>{repo.language}</span>
                </>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default GitHubProjects;
