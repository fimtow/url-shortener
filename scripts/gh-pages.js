var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/fimtow/url-shortener.git',
        user: {
            name: 'fimtow',
            email: '62258310+fimtow@users.noreply.github.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)