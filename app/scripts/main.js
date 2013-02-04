
window.portfolioI18 = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    new portfolioI18.Collections.HighlightCollection([{
        title: 'Big Brother Brasil',
        thumb: 'highlight-dummy.jpg',
        description: 'Membro da equipe de desenvolvimento do site oficial do Big Brother Brasil, o programa de maior audiência da América Latina.',
        url: 'http://tvg.globo.com/bbb/bbb13/index.html'
    },
    {
        title: 'The Voice Brasil',
        thumb: 'highlight-dummy.jpg',
        description: 'Description The Voice Brasil.',
        url: 'http://tvg.globo.com/programas/the-voice-brasil/index.html'
    },
    {
        title: 'Simple Code Review',
        thumb: 'highlight-dummy.jpg',
        description: 'Description Simple Code Review.',
        url: 'http://github.com/'
    }]);
  }
};

$(document).ready(function(){
  portfolioI18.init();
});
