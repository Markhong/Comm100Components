import React, { ReactElement, ComponentType } from 'react';
import PropTypes, { string } from 'prop-types';
import clsx from 'clsx';
import _ from 'lodash';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { AutoSizer, Column, Table, TableCellRenderer, TableHeaderProps, SortDirection, SortDirectionType } from 'react-virtualized';
import SortIndicator from './SortIndicator';
import Chat from '@material-ui/icons/Chat';
import Call from '@material-ui/icons/Call';

const styles = (theme: Theme) =>
  createStyles({
    table: {
      // height: '100%',
    },
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    tableRow: {
      cursor: 'pointer',
    },
    tableRowHover: {
      '&:hover': {
        backgroundColor: theme.palette.grey[200],
      },
    },
    tableCell: {
      flex: 1,
    },
    noClick: {
      cursor: 'initial',
    },
  });

interface ColumnData {
  dataKey: string;
  label: string;
  numeric?: boolean;
  width: number;
  flexGrow?: number;
}

interface Row {
  index: number;
}

interface MuiVirtualizedTableProps extends WithStyles<typeof styles> {
  columns: ColumnData[];
  headerHeight: number;
  onRowClick?: (row: Row) => void;
  rowCount: number;
  rowGetter: (row: Row) => Data;
  rowHeight: number;
  // sortBy: string,
  // sortDirection: SortDirectionType,
}

interface MuiVirtualizedTableStates {
  sortBy: string;
  sortDirection: SortDirectionType,
  sortedList: any[],
}

class MuiVirtualizedTable extends React.PureComponent<MuiVirtualizedTableProps, MuiVirtualizedTableStates> {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  constructor(props: any) {
    super(props);
    const sortBy = 'status';
    const sortDirection = SortDirection.DESC;
    const sortedList = this._sortList({ sortBy, sortDirection });

    this.state = {
      sortBy,
      sortDirection,
      sortedList
    };
  }

  getRowClassName = ({ index }: Row) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      // [classes.tableRowHover]: index !== -1 && onRowClick != null,
      [classes.tableRowHover]: index !== -1,
    });
  };

  cellRenderer: TableCellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        // align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex, dataKey, sortBy, sortDirection }: TableHeaderProps & { columnIndex: number }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: headerHeight }}
        // align={columns[columnIndex].numeric || false ? 'right' : 'left'}
      >
        <span>{label}</span>
        {sortBy === dataKey && <SortIndicator sortDirection={sortDirection} />}
      </TableCell>
    );
  };

  _sortList = ({ sortBy, sortDirection }: any) => {
    let newList = _.sortBy(list, [sortBy]);
    if (sortDirection === SortDirection.DESC) {
      newList.reverse();
    }
    return newList;
  };

  _sort = ({ sortBy, sortDirection }: any) => {
    const sortedList = this._sortList({ sortBy, sortDirection });
    this.setState({ sortBy, sortDirection, sortedList });
  };

  render() {
    const { classes, ...tableProps } = this.props;
    const columns = [
      {
        width: 60,
        label: '',
        dataKey: 'status',
      },
      {
        width: 320,
        label: 'Visitor Info',
        dataKey: 'visitorInfo',
      },
      {
        width: 100,
        label: 'Agents',
        dataKey: 'agents',
      },
      {
        width: 250,
        label: 'Current Page',
        dataKey: 'currentPage',
      },
      {
        width: 320,
        label: 'Referred from',
        dataKey: 'referredFrom',
      },
      {
        width: 100,
        label: 'Visits',
        dataKey: 'visits',
      },
      {
        width: 100,
        label: 'Chats',
        dataKey: 'chats',
        flexGrow: 1,
      },
    ];
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            className={classes.table}
            height={height} 
            width={width} 
            rowHeight={40}
            headerHeight={60}
            sort={this._sort}
            sortBy={this.state.sortBy}
            sortDirection={this.state.sortDirection}
            rowCount={this.state.sortedList.length}
            rowGetter={({ index }) => this.state.sortedList[index]}
            onRowClick={({ index }) => { console.log(index) }}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={headerProps =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

(MuiVirtualizedTable as any).propTypes = {
  classes: PropTypes.object.isRequired,
  // columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
  sort: PropTypes.string,
  sortDirection: PropTypes.string,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

interface Data {
  id: number;
  status: ReactElement,
  visitorInfo: string;
  agents: string;
  currentPage: ReactElement;
  referredFrom: ReactElement;
  visits: number;
  chats: number;
}
type Sample = [ReactElement, string, string, ReactElement, ReactElement, number, number];

// const currentPage1 = document.createElement('a');
// currentPage1.href = 'https://www.comm100.com';
const currentPage1 = React.createElement('a', {'href': '#'}, 'preview');
const referredFrom1 = React.createElement('a', {'href': '#'}, 'comm100.com');
const statusIcon1 = React.createElement(Chat);
const statusIcon2 = React.createElement(Call);
const sample: Sample[] = [
  [statusIcon1, 'mark@comm100.com', 'Mark', currentPage1, referredFrom1, 40, 10],
  [statusIcon2, 'Kaye', 'Mark', currentPage1, referredFrom1, 40, 2],
  [statusIcon1, 'test', 'Mark', currentPage1, referredFrom1, 60, 2],
  [statusIcon2, 'terry', 'Mark', currentPage1, referredFrom1, 40, 33],
  [statusIcon1, 'Andy', 'Mark', currentPage1, referredFrom1, 30, 12],
];

function createData(
  id: number,
  status: ReactElement,
  visitorInfo: string,
  agents: string,
  currentPage: ReactElement,
  referredFrom: ReactElement,
  visits: number,
  chats: number,
): Data {
  return { id,  status, visitorInfo, agents, currentPage, referredFrom, visits, chats };
}

const list: Data[] = [];

for (let i = 0; i < 1000; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  list.push(createData(i, ...randomSelection));
}



export default VirtualizedTable;
