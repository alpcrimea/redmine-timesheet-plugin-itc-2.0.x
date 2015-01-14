function targetField(label_element) {
  return  $(label_element.attributes.for.value);
}

function selectAllOptions(element) {
  for (var i = 0; i < element.options.length; i++) {
    element.options[i].selected = true;
  }
}


$( document ).ready(
  function(d) {
    $('label.select_all').each(function(i,element) {
      $(element).on('click', function (e) { selectAllOptions(targetField(this))})
    });

    $('div#content > div.contextual > a').each(function(i,aelement) {
      $(aelement).on('click',function (e) {
        $('div#timesheet-form > fieldset > form').each(
          function(j,element) {
            var action_old=element.action
            element.action = '/timesheet/report.csv'
            element.method = 'post'
            element.submit()
            element.action = action_old
            return false
        })
        return false
      })
    })
  }
)

