works = $('#row-works')
worksOffset = works.offset().top + 50
time = 40

showHover = (el, time) ->
  setTimeout -> 
    $(el).addClass('hover')
    setTimeout ->
      $(el).removeClass('hover')
    , time + 30
  , time

$(window).bind 'scroll.works', ->
  if $(this).scrollTop() + $(this).height() > worksOffset
    setTimeout ->
      works.find('a').each (i, el) ->
        showHover(el, time * (i + 1))
      $(this).unbind 'scroll.works'
    , 300
