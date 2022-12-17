# [{{bibliography}}]({{select}})
## Extracts
## Content
{% for attachment in attachments %}
### {{attachment.title}}
![[{{attachment.path | replace("/home/davis/Zotero/", "")}}]]
{% endfor %}