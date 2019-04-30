const { DefaultNamingStrategy } = require('typeorm');
const StringUtils = require('typeorm/util/StringUtils');

class SnakeCaseStrategy extends DefaultNamingStrategy {
  tableName(className, customName) {
    return customName ? customName : StringUtils.snakeCase(className);
  }

  columnName(propertyName, customName, embeddedPrefixes) {
    return (StringUtils.snakeCase(embeddedPrefixes.join('_')) +
      (customName ? customName : StringUtils.snakeCase(propertyName)));
  }

  relationName(propertyName) {
    return StringUtils.snakeCase(propertyName);
  }

  joinColumnName(relationName, referencedColumnName) {
    return StringUtils.snakeCase(`${relationName}_${referencedColumnName}`);
  }

  joinTableName(firstTableName, secondTableName, firstPropertyName, secondPropertyName) {
    return StringUtils.snakeCase(`${firstTableName}_${firstPropertyName.replace(/\./gi, '_')}_${secondTableName}`);
  }

  joinTableColumnName(tableName, propertyName, columnName) {
    return StringUtils.snakeCase(`${tableName}_${(columnName ? columnName : propertyName)}`);
  }

  classTableInheritanceParentColumnName(parentTableName, parentTableIdPropertyName) {
    return StringUtils.snakeCase(`${parentTableName}_${parentTableIdPropertyName}`);
  }
}

module.exports = {
  SnakeCaseStrategy: SnakeCaseStrategy
};
