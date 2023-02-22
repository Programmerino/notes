# [{{title}}]({{select}})
{% for attachment in attachments %}
{% if 'md' in attachment.title %}
![[{{attachment.path | replace("/home/davis/Zotero/", "")}}]]
{% endif %}
{% endfor %}