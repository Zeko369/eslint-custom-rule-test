// class names can't contain certain word

module.exports = {
  rules: {
    "no-rick": {
      create: (context) => {
        return {
          ClassDeclaration: (node) => {
            if (node.id.name.toLowerCase().includes("rick")) {
              context.report(node, 'Class name can\'t contain "rick"');
            }
          },
        };
      },
    },
  },
};
