lock '3.1.0'

set :rvm_ruby_string, 'uby-1.9.3-p547@hackdpl'

require 'capistrano/console'
require 'capistrano/bundler'
require 'capistrano/rvm'

set :user, 'ubuntu'
set :domain, '54.198.188.173'
set :application, 'hackdpl-team2'

set :deploy_to, "/home/ubuntu/hackdpl"
set :use_sudo, false

set :scm, 'git'
set :repo_url, 'https://github.com/Lochbridge/hackdpl-team2.git'
set :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }


set :keep_releases, 5

namespace :deploy do

  desc "Symlink shared files to current production release"
  task :symlink_shared do
    on roles(:app) do
      execute "mkdir #{release_path}/tmp"
    end
  end

  desc "Restart passenger web-server"
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      execute "touch #{current_path}/tmp/restart.txt"
    end
  end
end

after 'deploy', 'deploy:symlink_shared'
after 'deploy', 'deploy:restart'

set :bundle_cmd, "/usr/local/rvm/gems/ruby-1.9.3-p547@hackdpl/bin/bundle"
set :bundle_dir, "/usr/local/rvm/gems/ruby-1.9.3-p547@hackdpl"
