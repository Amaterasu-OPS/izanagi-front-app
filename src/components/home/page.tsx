'use client';

import * as S from './style'

import { Button, Flex, Grid, Text } from 'amaterasu-freyja-ui-design-system';
import { FiMenu, FiPlus } from 'react-icons/fi';
import { PageHeader, Pagination } from '../shared';

import { ClusterItem } from './components';
import { useState } from 'react';

export const HomePageComponent = () => {
    const [page, setPage] = useState(0);
    const maxItemsPerPage = 25;

    const items = [
        {
            id: '1',
            name: 'Cluster 1',
            region: 'us-east-1',
            instances: 5,
            technology: 'Druid kubernetes',
            cpuUsage: 70,
            memoryUsage: 65,
            healthy: true,
            provider: 'AWS',
        },
        {
            id: '2',
            name: 'Cluster 2',
            region: 'eu-west-1',
            instances: 3,
            technology: 'Clickhouse EC2',
            cpuUsage: 55,
            memoryUsage: 45,
            healthy: false,
            provider: 'AWS',
        },
        {
            id: '3',
            name: 'Cluster 3',
            region: 'ap-southeast-1',
            instances: 8,
            technology: 'PostgreSQL',
            cpuUsage: 80,
            memoryUsage: 70,
            healthy: true,
            provider: 'AWS',
        },
        {
            id: '4',
            name: 'Cluster 4',
            region: 'us-west-2',
            instances: 4,
            technology: 'ScyllaDB',
            cpuUsage: 60,
            memoryUsage: 50,
            healthy: true,
            provider: 'AWS',
        },
        {
            id: '5',
            name: 'Cluster 5',
            region: 'sa-east-1',
            instances: 6,
            technology: 'Druid EC2',
            cpuUsage: 75,
            memoryUsage: 80,
            healthy: false,
            provider: 'AWS',
        }
    ]

    return <>
        <PageHeader>
            <div>
                <Text color='#FFF' weight='light' size='4xlarge' as='h1'>Clusters</Text>
                <Text color='#E0E0E0' weight='extralight' size='large' as='h3'>5 clusters</Text>
            </div>
            <Flex gap='.5rem'>
                <S.AddButton variant='secondary' rounded='full'><FiPlus size={'1.5em'} /></S.AddButton>
                <Button variant='secondary'>
                    <Flex gap='.25rem'>
                        <FiMenu size={'1.5em'}/>
                        <S.FilterButtonText>Filters</S.FilterButtonText>
                    </Flex>
                </Button>
            </Flex>
        </PageHeader>
        <Grid gridTemplateColumns="1fr 1fr 1fr" gap='2rem'>
            {items.slice(page * maxItemsPerPage, (page + 1) * maxItemsPerPage).map(item => (
                <ClusterItem key={item.id} item={item} />
            ))}
        </Grid>
        <br />
        <br />
        <Pagination currentPage={page} totalItems={items.length} itemsPerPage={maxItemsPerPage} onPageChange={(page) => { setPage(page) }}   />
    </>;
}