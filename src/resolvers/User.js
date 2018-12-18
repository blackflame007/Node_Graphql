function messages(parent, args, context) {
  return context.prisma.user({ id: parent.id }).messages();
}

module.exports = {
  messages
};
