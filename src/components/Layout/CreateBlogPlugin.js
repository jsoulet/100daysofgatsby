import { RemarkCreatorPlugin } from "gatsby-tinacms-remark"
import slugify from 'slugify'

const formatDate = (date) => date.getFullYear() + "-" + (date.getMonth() + 1 < 10 ? '0': '') + (date.getMonth() + 1) + "-" + (date.getDate() < 10 ? '0': '') + date.getDate()

const CreateBlogPlugin = new RemarkCreatorPlugin({
    label: "New Blog Post",
    filename: form => {
      const formattedDate = formatDate(form.date)
      return `content/posts/${formattedDate}.md`
    },
    frontmatter: form => ({
      title: form.title,
      date: form.date,
      path: `/blog/${formatDate(form.date)}-${slugify(form.title)}`
    }),
    fields: [
      {
        name: "title",
        component: "text",
        label: "Title",
        required: true
      },
      {
        name: "date",
        component: 'date',
        dateFormat: "YYYY-MM-DD",
        timeFormat: false,
        label: "Date",
        defaultValue: new Date(),
        required: true
      },
    ],
  })

export default CreateBlogPlugin