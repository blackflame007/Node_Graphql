function feed(parent, args, context, info) {
  return context.prisma.messages();
}

module.exports = {
  feed
};
