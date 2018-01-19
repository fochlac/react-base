export const setter = (self) => ({field, type = 'value'}) => ({target}) => {
    self.setState({[field]: target[type]});
};